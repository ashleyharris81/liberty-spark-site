CREATE TABLE public.depot_lookup_usage (
  day date PRIMARY KEY DEFAULT (now() AT TIME ZONE 'utc')::date,
  lookups integer NOT NULL DEFAULT 0
);

GRANT ALL ON public.depot_lookup_usage TO service_role;

ALTER TABLE public.depot_lookup_usage ENABLE ROW LEVEL SECURITY;

CREATE OR REPLACE FUNCTION public.consume_depot_lookup(_max integer)
RETURNS boolean
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = public
AS $$
DECLARE
  _today date := (now() AT TIME ZONE 'utc')::date;
  _count integer;
BEGIN
  INSERT INTO public.depot_lookup_usage (day, lookups)
  VALUES (_today, 1)
  ON CONFLICT (day) DO UPDATE
    SET lookups = public.depot_lookup_usage.lookups + 1
    WHERE public.depot_lookup_usage.lookups < _max
  RETURNING lookups INTO _count;

  RETURN _count IS NOT NULL;
END;
$$;

REVOKE ALL ON FUNCTION public.consume_depot_lookup(integer) FROM PUBLIC;
GRANT EXECUTE ON FUNCTION public.consume_depot_lookup(integer) TO service_role;
