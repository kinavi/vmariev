type iconType = {
  type: 'PdfFile' | "ExcelFile" | 'WordFile' | 'VideoFile' | 'File'
  color: string
}

export const choiceIconForFile = (fileName: string): iconType => {
  const stringArray = fileName.split('.')
  const extension = stringArray[stringArray.length - 1]
  switch (extension) {
    case 'pdf': return { type: 'PdfFile', color: '#ED5F55' }
    case 'xls': 
    case 'xlsx' : return { type: "ExcelFile", color: "#82C250" }
    case 'doc':
    case 'docx': return { type: 'WordFile', color: '#4B8CDC' }
    case 'avi': 
    case 'mpg':
    case 'mp4':
    case 'wmv':
    case 'mkv': return { type: 'VideoFile', color: '#7277D5' }
    default: return { type: 'File', color: '#A5ADB8' }
  }
}
