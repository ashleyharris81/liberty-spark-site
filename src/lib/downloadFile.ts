const getFilenameFromUrl = (url: string) => {
  const pathname = url.split("?")[0];
  const segments = pathname.split("/").filter(Boolean);
  return segments.at(-1) || "download.pdf";
};

export const downloadFile = async (url: string, filename?: string) => {
  const resolvedFilename = filename || getFilenameFromUrl(url);

  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`Download failed with status ${response.status}`);
    }

    const blob = await response.blob();
    const blobUrl = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = blobUrl;
    link.download = resolvedFilename;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(blobUrl);
  } catch (error) {
    console.error("Failed to download file", error);
    window.open(url, "_blank", "noopener,noreferrer");
  }
};