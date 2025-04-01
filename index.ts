import fetch from 'node-fetch';
import { APIGatewayProxyHandler } from 'aws-lambda';

export const handler: APIGatewayProxyHandler = async (event) => {
  try {
    const body = JSON.parse(event.body as string);
    const email = body.email;
    const response = await fetch('https://script.google.com/macros/s/AKfycbxYdabddBg9oWcuU4EO8oVYVlcI_wkn6soWi0LxuubGQxEpIWciXS4abnnhxkaNY9XHDw/exec', {
      method: 'POST',
      body: JSON.stringify({ email }),
      headers: { 'Content-Type': 'application/json' }
    });

    const result = await response.text();
    return {
      statusCode: 200,
      body: JSON.stringify({ message: result }),
    };
  } catch (error) {
    console.error('Error during form submission:', error);
    return {
      statusCode: 500,
      body: JSON.stringify({ message: `An error occurred. Please try again. Error: ${JSON.stringify(error)} with body ${JSON.stringify(event)}` })
    };
  }
};