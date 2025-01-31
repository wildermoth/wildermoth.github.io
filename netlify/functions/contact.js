const fetch = require('node-fetch');

exports.handler = async function (event, context) {
    // Only allow POST
    if (event.httpMethod !== 'POST') {
        return {
            statusCode: 405,
            body: 'Method Not Allowed',
        };
    }

    try {
        const formData = JSON.parse(event.body);

        const url = `https://response-form.azurewebsites.net/api/HttpTrigger1?code=${process.env.AZURE_FUNCTION_KEY}`;
        console.log('Calling Azure Function at:', url.replace(process.env.AZURE_FUNCTION_KEY, '[REDACTED]'));

        const response = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData),
        });

        if (!response.ok) {
            const errorText = await response.text();
            throw new Error(`Azure Function responded with ${response.status}: ${errorText}`);
        }

        return {
            statusCode: 200,
            body: JSON.stringify({ message: 'Success' }),
        };
    } catch (error) {
        console.error('Error details:', error);
        return {
            statusCode: 500,
            body: JSON.stringify({ error: `Failed to send message: ${error.message}` }),
        };
    }
};
