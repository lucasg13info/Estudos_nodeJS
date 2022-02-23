//process.stdout.write("Alguma coisa \n\n\n")

const questions = [
    "O que aprendi hoje?",
    "O que mne deixou aborrecido?",
    "O que eu poderia fazer para melhorar?",
    "O que me deixou feliz hoje?",
]

const ask = (index = 0) =>{
    process.stdout.write(questions[index] + "\n") 
}

ask()

process.stdin.on("data", data=>{
    process.stdout.write(data.toString().trim() + "\n")
    process.exit()
})