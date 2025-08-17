export function getDriveFileId(input: string): string | null { 
  if (!input.includes('drive.google.com')) {
    return input.trim();
  }
 
  const match = input.match(/\/d\/([a-zA-Z0-9_-]+)/);
  return match ? match[1] : null;
}

 