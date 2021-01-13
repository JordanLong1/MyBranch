export const questionsAndOptions = [
    {questionId: 1, 
        questionTitle: 'How do you think you learn best?', 
        options: [
            { 
           optionTitle: 'Online learning', // almost finished need something for null.
             pointsTo: 2
            }, 
            {
            optionTitle: 'Face-face-interaction', // done here for now. 
            pointsTo: 3                
            }, 
            {
            optionTitle: 'Combination of both', // needs more
            pointsTo: 4
            }
        ], 
    }, 
    {
        questionId: 2, 
        questionTitle: 'In which way do you typically study for a test?', 
        options: [
            {optionTitle: 'Memorizing contents of index cards', 
            pointsTo: 5
            }, 
            {
                optionTitle: 'Read the book(s) or your notes', 
                pointsTo: 6
            }
        
             ]
        }, 

    {
        questionId: 3, 
        questionTitle: 'Which method would you prefer over the other?', 
        options: [
            {
             optionTitle: 'Learning by doing. Hands on experience', 
            pointsTo: 7
            }, 
        {
            optionTitle: 'Learning by observing or watching someone do the task', 
            pointsTo: 8
        }
        ]
    }, 

    {
        questionId: 4, 
        questionTitle: 'When learning a new skill, what pace do you prefer to work at?', 
        options: [
            {
                optionTitle: 'Self paced with little to no structure.',
                pointsTo: 9
            }, 
            {
                optionTitle: 'Faster pace with more structure.', 
                pointsTo: 10
            }, 
           
        ]
    }, 
    {
        questionId: 5, 
        questionTitle: 'When you approach learning something new, which method do you prefer?', 
        options: [
            {
                optionTitle: 'Watching a video explanation.',
                pointsTo: null // end
            }, 
            {
                optionTitle: 'Reading an article, blog, or book on the topic', 
                pointsTo: 10 // end of branch
            }, 
        ]
    }, 
    {
        questionId: 6, 
        questionTitle: 'Question 6', 
        options: [
            {
                optionTitle: 'tbd',
                pointsTo: null
            }, 
            {
                optionTitle: 'tbd', 
                pointsTo: null 
            }, 
        ]
    }, 
    {
        questionId: 7, 
        questionTitle: 'Which environment do you succeed in more?', 
        options: [
            {
                optionTitle: 'Group work, working with others on projects. ',
                pointsTo: null // end 
            }, 
            {
                optionTitle: 'Working independently or by yourself.', 
                pointsTo: null // end
            }, 
        ]
    }, 

    {
        questionId: 8, 
        questionTitle: 'What is the best way for you to remember your friends phone number?', 
        options: [
            {
                optionTitle: 'Picture the numbers on your phone.',
                pointsTo: null // end 
            }, 
            {
                optionTitle: 'Write it down on a piece of paoer. ', 
                pointsTo: null // end
            }, 
        ]
    }, 

    {
        questionId: 9, 
        questionTitle: 'Do you like having more help available or would you prefer to only have help in a limited capacity?', 
        options: [
            {
                optionTitle: 'More help available',
                pointsTo: null // end 
            }, 
            {
                optionTitle: 'Limited capacity, maybe one or two times a week.', 
                pointsTo: null // end
            }, 
        ]
    }
]

