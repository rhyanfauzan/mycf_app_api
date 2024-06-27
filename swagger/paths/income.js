module.exports = {
    '/api/incomes': {
      post: {
        tags: ['Incomes'],
        summary: 'Add new income',
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
                  source: {
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
            description: 'Income successfully added',
          },
          400: {
            description: 'Bad request',
          },
        },
      },
    },
    '/api/incomes/{userId}': {
      get: {
          tags: ['Incomes'],
          summary: 'Get all incomes by user ID',
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
  '/api/incomes/{userId}/date': {
      get: {
          tags: ['Incomes'],
          summary: 'Get all incomes by user ID filtered by date range',
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
  '/api/incomes/{userId}/source': {
      get: {
          tags: ['Incomes'],
          summary: 'Get all incomes by user ID filtered by source',
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
                  name: 'source',
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
  