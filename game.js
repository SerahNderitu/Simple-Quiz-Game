 <script>
                // an array of question with choices
            
            const quizDetail = [
                {
                    question: 'Which one of the following is a backend programming language?',
                    a: 'CSS',
                    b: 'HTML',
                    c: 'Python',
                    d: 'JavaScript',
                    correct: 'c',
                },
                  {
                    question: 'Which one of the following is NOT an array method?',
                    a: '.sort',
                    b: '.delete',
                    c: '.join',
                    d: '.concat',
                    correct: 'b',
                },
                  {
                    question: 'Choose a mutable data type',
                    a: 'Strings',
                    b: 'Bolean',
                    c: 'Numbers',
                    d: 'Array',
                    correct: 'd',
                },
                  {
                    question: 'Which one of the following statement is false?',
                    a: 'Arrays helps to understand where variables are in play',
                    b: 'Variables points to things in JavaScript',
                    c: 'Values represent things in JavaScript',
                    d: ' Funtions do things in JavaScript',
                    correct: 'a',
                },
            ];
            
            // declaring variables/constant
            
            const quiz = document.getElementById('quiz');
            const answers = document.querySelectorAll('.answer');
            const question = document.getElementById('question');
            const a_text = document.getElementById('a_text');
            const b_text = document.getElementById('b_text');
            const c_text = document.getElementById('c_text');
            const d_text = document.getElementById('d_text');
            const submitBtn = document.getElementById('submit');
            
            let currentQuiz = 0;
            let score = 0;
            
            loadQuizData();
            
            function loadQuizData() {
                const currentQuizData = quizDetail[currentQuiz];
                
                deselectedAnswers();
                
                question.innerHTML = currentQuizData.question;
                a_text.innerHTML = currentQuizData.a;
                b_text.innerHTML = currentQuizData.b;
                c_text.innerHTML = currentQuizData.c;
                d_text.innerHTML = currentQuizData.d;
            } 
            
            function deselectedAnswers() {
                answers.forEach((answer) => (answer.checked = false));
            }
            
            function getSelected() {
                let selectedAnswer;
                answers.forEach((answer) => {
                    if (answer.checked) {
                      selectedAnswer = answer.id;
                    }
                });
                return selectedAnswer;
            }
            
            submitBtn.addEventListener('click', () => {
                const selectedAnswer = getSelected();
                // console.log(selectedAnswer)

                if (selectedAnswer) {
                    if (selectedAnswer === quizDetail[currentQuiz].correct) {
                        score++;
                        
                    }
                    currentQuiz++;
                    
                    if (currentQuiz < quizDetail.length) {
                        loadQuizData();
                    } else {
                        quiz.innerHTML = `
                         <h2> Congratulations! You have completed the quiz. You scored ${score * 20}!</h2>
                            <button class="submit" onclick="location.reload()"> Try Again </button>
                        `;
                            
                    }
                }
            });
</script>
