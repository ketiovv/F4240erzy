'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {

    let stages = [
      {
        stageNumber: 1,
        amount: 500,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      { stageNumber: 2,
        amount: 1000,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      { stageNumber: 3,
        amount: 2000,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      { stageNumber: 4,
        amount: 5000,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      { stageNumber: 5,
        amount: 10000,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      { stageNumber: 6,
        amount: 20000,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      { stageNumber: 7,
        amount: 40000,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      { stageNumber: 8,
        amount: 75000,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      { stageNumber: 9,
        amount: 125000,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      { stageNumber: 10,
        amount: 250000,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      { stageNumber: 11,
        amount: 500000,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      { stageNumber: 12,
        amount: 1000000,
        createdAt: new Date(),
        updatedAt: new Date()
      },
    ];

    let addedStages =  await queryInterface.bulkInsert('stages', stages, {});


    let questions = [{
        id: 1,
        contentOfQuestion: "Co NIE jest prawdą o Bootstrapie?",
        stageId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 2,
        contentOfQuestion: "Na ile kolumn jest podzielona responsywna siatka bootstrapowa?",
        stageId: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 3,
        contentOfQuestion: "Za co odpowiada reboot w Bootstrapie?",
        stageId: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ]

    let addedQuestions = await queryInterface.bulkInsert('questions', questions, {});


    let answers = [
      {
        contentOfAnswer: "Składa się m. in. z plików napisanych w CSS.",
        correct: false,
        questionId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        contentOfAnswer: "Składa się m. in. z plików napisanych w JavaScript.",
        correct: false,
        questionId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        contentOfAnswer: "Jest backendowym frameworkiem.",
        correct: true,
        questionId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        contentOfAnswer: "Jest frontendowym frameworkiem.",
        correct: false,
        questionId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ];

    await queryInterface.bulkInsert('answers', answers, {});

    console.log(addedStages)
    console.log(addedQuestions)
  },
  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('stages', null, {});
  }
};
