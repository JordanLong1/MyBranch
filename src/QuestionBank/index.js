export const questionsAndOptions = [
    {questionId: 1, 
        questionTitle: 'How do you think you learn best?', 
        options: [
            { 
           optionTitle: 'Online learning', // almost finished need something for null.
             pointsTo: 2, 
             typeOfAnswer: 'A'
            }, 
            {
            optionTitle: 'Face-face-interaction', // done here for now. 
            pointsTo: 3, 
            typeOfAnswer: 'B',             
            }, 
            {
            optionTitle: 'Combination of both', // needs more
            pointsTo: 4, 
            typeOfAnswer: 'C'
            }
        ], 
    }, 
    {
        questionId: 2, 
        questionTitle: 'What works better for you when studying for a test?', 
        options: [
            {optionTitle: 'Memorizing contents of index cards', 
            pointsTo: 5, 
            typeOfAnswer: 'A'
            }, 
            {
                optionTitle: 'Read the book(s) or your notes', 
                pointsTo: 6, 
                typeOfAnswer: 'B'                

            }
        
             ]
        }, 

    {
        questionId: 3, 
        questionTitle: 'Which method would you prefer over the other?', 
        options: [
            {
             optionTitle: 'Learning by doing. Hands on experience', 
            pointsTo: 7, 
            typeOfAnswer: 'C'
            }, 
        {
            optionTitle: 'Learning by observing or watching someone do the task', 
            pointsTo: 8, 
            typeOfAnswer: 'A'
        }
        ]
    }, 

    {
        questionId: 4, 
        questionTitle: 'When choosing a career area of study, I would:', 
        options: [
            {
                optionTitle: 'Work with designs, maps or charts.',
                pointsTo: 9, 
                typeOfAnswer: 'A'
            }, 
            {
                optionTitle: 'Use words well in written communications.', 
                pointsTo: 10, 
                typeOfAnswer: 'B'
            }, 
            {
                optionTitle: 'A little bit of both.', 
                pointsTo: 0, 
                typeOfAnswer: 'C'
            }, 
           
        ]
    }, 
    {
        questionId: 5, 
        questionTitle: 'When you approach learning something new, which method do you prefer?', 
        options: [
            {
                optionTitle: 'Watching a video explanation.',
                pointsTo: 0,  // end
                typeOfAnswer: 'A'
            }, 
            {
                optionTitle: 'Reading an article, blog, or book on the topic', 
                pointsTo: 10, // end of branch
                typeOfAnswer: 'B'
            }, 
        ]
    }, 
    {
        questionId: 6, // B points here.
        questionTitle: 'You want to put together a new desk from Ikea, how would you approach the task?', 
        options: [
            {
                optionTitle: 'Start with the directions given.',
                pointsTo: 0, 
                typeOfAnswer: 'B'
            }, 
            {
                optionTitle: `Search "how to" on Youtube.`, 
                pointsTo: 0, 
                typeOfAnswer: 'A'
            }, 
        ]
    }, 
    {
        questionId: 7, 
        questionTitle: 'What sort of school assignments do you enjoy the most? ', 
        options: [
            {
                optionTitle: 'Memorizing assignments, video lectures, watching and listening to the teacher give a lecture.',
                pointsTo: 0, // end 
                typeOfAnswer: 'A'
            }, 
            {
                optionTitle: 'Writing essays, book reports, written tests.', 
                pointsTo: 0, // end
                typeOfAnswer: 'B'
            }, 
            {
                optionTitle: 'A little bit of both.', 
                pointsTo: 0, // end
                typeOfAnswer: 'C'
            }, 
        ]
    }, 

    {
        questionId: 8, 
        questionTitle: 'What is the best way for you to remember your friends phone number?', 
        options: [
            {
                optionTitle: 'Picture the numbers on your phone.',
                pointsTo: 0,  // end 
                typeOfAnswer: 'A'
            }, 
            {
                optionTitle: 'Write it down on a piece of paper. ', 
                pointsTo: 0, // end
                typeOfAnswer: 'B'
            }, 
        ]
    }, 

    {
        questionId: 9, 
        questionTitle: 'A website has a video showing how to make a special graph or chart. There is a person speaking, some lists and words describing what to do and some diagrams. I would learn most from:', 
        options: [
            {
                optionTitle: 'Watching the actions',
                pointsTo: 0 ,// end 
                typeOfAnswer: 'A'
            }, 
            {
                optionTitle: 'Reading the captions', 
                pointsTo: 0, // end
                typeOfAnswer: 'B'
            }, 

            {
                optionTitle: 'Seeing the diagrams.', 
                pointsTo: 0,  // end
                typeOfAnswer: 'A'
            }, 
        ]
    }
]

