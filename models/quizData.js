const quizData = [
  {
    quizName:"Marvel Cinematic Universe(MCU)",
    playTime:"5 minutes",
    totalPoints:25,
    totalQuestions:5,
    description:"Are you a MCU Fan? Test your skills by taking this quiz!!",
    imageUrl:"https://rukminim1.flixcart.com/image/416/416/kavefm80/poster/w/x/z/medium-the-marvel-avengers-wall-poster-for-room-with-gloss-original-imafsckr6vt3wjjv.jpeg?q=70",
    questions:[
      {
        question:"What year was the first Iron Man movie released, kicking off the Marvel Cinematic Universe?",
        points: 5,
        options:[
          {
            text:"2007",
            isRight:false,
          },
          {
            text:"2008",
            isRight:true,
          },
          {
            text:"2009",
            isRight:false,
          },
          {
            text:"2010",
            isRight:false,
          }
        ]
      },
      {
        question:"What war did Captain America fight in?",
        points: 5,
        options:[
          {
            text:"World War 1",
            isRight:false,
          },
          {
            text:"Vietnam",
            isRight:false,
          },
          {
            text:"World War 2",
            isRight:true,
          },
          {
            text:"Gulf War",
            isRight:false,
          }
        ]
      },
      {
        question:"Which alien race invaded New York in The Avengers?",
        points: 5,
        options:[
          {
            text:"Chitauri",
            isRight:true,
          },
          {
            text:"Kree",
            isRight:false,
          },
          {
            text:"Skrulls",
            isRight:false,
          },
          {
            text:"Shi'ar",
            isRight:false,
          }
        ]
      },
      {
        question:"Who was the first major character to die?",
        points: 5,
        options:[
          {
            text:"Black Widow",
            isRight:false,
          },
          {
            text:"Nebula",
            isRight:false,
          },
          {
            text:"Tony Stark",
            isRight:false,
          },
          {
            text:"Heimdall",
            isRight:true,
          }
        ]
      },
      {
        question:"Who made Captain America’s shield?",
        points: 5,
        options:[
          {
            text:"Nick Fury",
            isRight:false,
          },
          {
            text:"Howard Stark",
            isRight:true,
          },
          {
            text:"Tony Stark",
            isRight:false,
          },
          {
            text:"Bruce Banner",
            isRight:false,
          }
        ]
      }
    ]
  },
  {
    quizName:"Fitness",
    playTime:"5 minutes",
    totalPoints:25,
    totalQuestions:5,
    description:"Are you a fitness enthusiast? Check it out by trying this quiz!!",
    imageUrl:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSZJ9_z_ym29_b8cgrHYinpeZN0Vtq0rQUgjQ&usqp=CAU",
    questions:[
      {
        question:"Which of the following health benefits would result from regular walking?",
        points: 5,
        options:[
          {
            text:"Increased blood pressure",
            isRight:false,
          },
          {
            text:"Increased resting heart rate",
            isRight:false,
          },
          {
            text:"Decreased risk of CHD",
            isRight:true,
          },
          {
            text:"Decreased life expectancy",
            isRight:false,
          }
        ]
      },
      {
        question:"What is the strongest muscle in the human body?",
        points: 5,
        options:[
          {
            text:"Heart",
            isRight:true,
          },
          {
            text:"Calve Muscle",
            isRight:false,
          },
          {
            text:"Bicep Muscle",
            isRight:false,
          },
          {
            text:"Gluteus Maximus",
            isRight:false,
          }
        ]
      },
      {
        question:"At what rate does muscle turn to fat without exercise?",
        points: 5,
        options:[
          {
            text:"One Ounce Per Week",
            isRight:false,
          },
          {
            text:"One Pound Per Year",
            isRight:false,
          },
          {
            text:"One Pound Per Week",
            isRight:false,
          },
          {
            text:"Muscle Doesn't Turn To Fat",
            isRight:true,
          }
        ]
      },
      {
        question:"What is the definition of muscular strength?",
        points: 5,
        options:[
          {
            text:"The ability of muscles to exert minimum force in one contraction",
            isRight:false,
          },
          {
            text:"The ability of muscles to exert maximum force in one contraction",
            isRight:true,
          },
          {
            text:"The ability of muscles to repeatedly exert maximum force",
            isRight:false,
          },
          {
            text:"The ability of muscles to repeatedly exert minimum force",
            isRight:false,
          }
        ]
      },
      {
        question:"Which of the following would be classified in the aerobic fitness zone?",
        points: 5,
        options:[
          {
            text:"65% max heart rate",
            isRight:false,
          },
          {
            text:"75% max heart rate",
            isRight:true,
          },
          {
            text:"85% max heart rate",
            isRight:false,
          },
          {
            text:"95% max heart rate",
            isRight:false,
          }
        ]
      }
    ]
  }
]

module.exports = quizData;