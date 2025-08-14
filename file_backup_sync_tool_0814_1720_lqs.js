// 代码生成时间: 2025-08-14 17:20:28
(function($) {

    // Configuration for the backup and sync tool
    const config = {
        sourceDir: '/path/to/source/directory',
        targetDir: '/path/to/target/directory',
        backupDir: '/path/to/backup/directory'
    };

    /**
     * Copies a file from the source directory to the target directory.
     * @param {string} filePath - The path to the file to be copied.
     */
    function copyFile(filePath) {
        const sourcePath = `${config.sourceDir}/${filePath}`;
        const targetPath = `${config.targetDir}/${filePath}`;
        const backupPath = `${config.backupDir}/${filePath}`;

        // Check if the file exists
        if (!fs.existsSync(sourcePath)) {
            console.error(`File not found: ${filePath}`);
            return;
        }

        // Create the target directory if it does not exist
        fs.mkdirSync(config.targetDir, { recursive: true });

        // Copy the file
        fs.copyFileSync(sourcePath, targetPath);
        console.log(`File copied: ${filePath}`);

        // Backup the original file
        fs.copyFileSync(sourcePath, backupPath);
        console.log(`Backup created: ${filePath}`);
    }

    /**
     * Recursively syncs all files in the source directory to the target directory.
     */
    function syncDirectories() {
        // Read the source directory
        fs.readdirSync(config.sourceDir).forEach(file => {
            const filePath = path.join(config.sourceDir, file);
            const stats = fs.statSync(filePath);

            // Check if it's a file or directory
            if (stats.isFile()) {
                copyFile(file);
            } else if (stats.isDirectory()) {
                // If it's a directory, create it in the target directory and recurse
                fs.mkdirSync(path.join(config.targetDir, file), { recursive: true });
                syncDirectories(filePath, path.join(config.targetDir, file));
            }
        });
    }

    /**
     * Starts the backup and sync process.
     */
    function startBackupAndSync() {
        try {
            syncDirectories();
            console.log('Backup and sync completed successfully.');
        } catch (error) {
            console.error('Error during backup and sync:', error);
        }
    }

    // Expose the startBackupAndSync function to the global scope
    window.startBackupAndSync = startBackupAndSync;

})(jQuery);