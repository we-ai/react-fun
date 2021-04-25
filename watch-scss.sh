#! bin/bash

# sass will access `SASS_PATH` for files needed:
export SASS_PATH=$PWD/scss

# Find all scss files, for corresponding scc files:
src=$PWD/src
scss_files=$(find $src -type f -name "*.scss")

arr=()
for scss in $scss_files
do
    css=${scss/%scss/css}
    arr[${#arr[@]}]=$scss:$css
done

# Let sass watch these scss:css files:
sass --no-source-map --style=compressed --no-error-css  --update --watch ${arr[@]}
