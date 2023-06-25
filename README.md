# file-manager

hot command:

Navigation & working directory (nwd):

    cd [path_to_directory] - Go to dedicated folder from current directory 

    ls - print in console list of all files and folders in current directory;

    up or cd .. - go upper from current directory
    
    clear - clear display

Basic operations with files:

    cat [path_to_file] - read file and print it's content in console;

    add [new_file_name] - create empty file in current working directory;

    rn [path_to_file] [new_filename] - rename file (content should remain unchanged);

    cp [path_to_file] [path_to_new_directory] - copy file;

    mv [path_to_file] [path_to_new_directory] - move file;

    rm [path_to_file] - delete file.

Operating system info:

    os --EOL - EOL;

    os --cpus - host machine CPUs info;

    os --homedir - home directory and print it to console;

    os --username - current system user name;

    os --architecture - CPU architecture

Hash calculation:

    hash [path_to_file] - calculate hash for file.

Compress and decompress operations

    compress [path_to_file] [path_to_destination] - compress file;

    decompress [path_to_file] [path_to_destination] - decompress file.

