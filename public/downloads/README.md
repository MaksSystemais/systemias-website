# Downloads Folder

This folder contains downloadable files organized by project.

## Folder Structure

```
downloads/
  └── weekly-timesheets/
      └── WeeklyTimesheets.msapp (place the Power App package file here)
```

## Adding Files

To add downloadable files:
1. Place the file in the appropriate project folder
2. Update the `downloadUrl` in `pages/download-success.js` if needed
3. The file will be publicly accessible at `/downloads/[project-name]/[filename]`

## Future Projects

For new projects, create a new folder:
```
downloads/
  └── [project-name]/
      └── [your-file.ext]
```

Then add a new configuration in `pages/download-success.js`:
```javascript
const appConfig = {
  'project-name': {
    title: 'Your Project Title',
    downloadUrl: '/downloads/project-name/your-file.ext',
    fileName: 'your-file.ext'
  }
};
```

