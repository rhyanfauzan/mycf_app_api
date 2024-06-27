module.exports = {
    '/api/budgets': {
      post: {
        tags: ['Budgets'],
        summary: 'Add new budget',
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
                  label: {
                    type: 'string',
                  },
                  category: {
                    type: 'string',
                  },
                },
              },
            },
          },
        },
        responses: {
          201: {
            description: 'Budget successfully added',
          },
          400: {
            description: 'Bad request',
          },
        },
      },
    },
    '/api/budgets/{userId}': {
        get: {
            tags: ['Budgets'],
            summary: 'Get all budgets by user ID',
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
    '/api/budgets/{userId}/category': {
        get: {
            tags: ['Budgets'],
            summary: 'Get all budgets by user ID filtered by category',
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
  