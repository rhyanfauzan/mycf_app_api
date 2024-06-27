module.exports = {
    '/api/expenses': {
      post: {
        tags: ['Expenses'],
        summary: 'Add new expense',
        requestBody: {
          required: true,
          content: {
            'application/json': {
              schema: {
                type: 'object',
                properties: {
                  userId: {
                    type: 'integer',
                  },
                  amount: {
                    type: 'number',
                    format: 'float',
                  },
                  category: {
                    type: 'string',
                  },
                  date: {
                    type: 'string',
                    format: 'date',
                  },
                },
              },
            },
          },
        },
        responses: {
          201: {
            description: 'Expense successfully added',
          },
          400: {
            description: 'Bad request',
          },
        },
      },
    },
    '/api/expenses/{userId}': {
        get: {
            tags: ['Expenses'],
            summary: 'Get all expenses by user ID',
            parameters: [
                {
                    name: 'userId',
                    in: 'path',
                    required: true,
                    schema: {
                        type: 'integer',
                    },
                },
            ],
            responses: {
                200: {
                    description: 'Successful response',
                },
                400: {
                    description: 'Bad request',
                },
            },
        },
    },
    '/api/expenses/{userId}/date': {
        get: {
            tags: ['Expenses'],
            summary: 'Get all expenses by user ID filtered by date range',
            parameters: [
                {
                    name: 'userId',
                    in: 'path',
                    required: true,
                    schema: {
                        type: 'integer',
                    },
                },
                {
                    name: 'startDate',
                    in: 'query',
                    required: true,
                    schema: {
                        type: 'string',
                        format: 'date',
                    },
                },
                {
                    name: 'endDate',
                    in: 'query',
                    required: true,
                    schema: {
                        type: 'string',
                        format: 'date',
                    },
                },
            ],
            responses: {
                200: {
                    description: 'Successful response',
                },
                400: {
                    description: 'Bad request',
                },
            },
        },
    },
    '/api/expenses/{userId}/category': {
        get: {
            tags: ['Expenses'],
            summary: 'Get all expenses by user ID filtered by category',
            parameters: [
                {
                    name: 'userId',
                    in: 'path',
                    required: true,
                    schema: {
                        type: 'integer',
                    },
                },
                {
                    name: 'category',
                    in: 'query',
                    required: true,
                    schema: {
                        type: 'string',
                    },
                },
            ],
            responses: {
                200: {
                    description: 'Successful response',
                },
                400: {
                    description: 'Bad request',
                },
            },
        },
    },
};
  