count_files() {
    local file_count=$(ls -1 | wc -l)
    echo $file_count
}
prompt_guess() {
    echo "How many files are in the current directory?"
    read guess
}
play_game() {
    local correct=$(count_files)
    local guess=-1
    
    while [[ $guess -ne $correct ]]
    do
        prompt_guess
        
        if [[ $guess -eq $correct ]]
        then
            echo "Congratulations! You guessed correctly!"
        elif [[ $guess -lt $correct ]]
        then
            echo "Your guess is too low. Try again!"
        else
            echo "Your guess is too high. Try again!"
        fi
    done
}
echo "Welcome to the Guessing Game!"
play_game