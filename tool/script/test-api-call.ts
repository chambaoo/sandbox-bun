import { fetch } from 'bun';


const apiToken = process.env.NOTION_KEY;
const databaseId = process.env.NOTION_DB_ID;

const requestBody = {
  parent: {
    database_id: databaseId,
  },
  icon: {
    emoji: '🐟',
  },
  properties: {
    Name: {
      title: [
        {
          text: {
            content: 'Hello Integration！',
          },
        },
      ],
    },
  },
};

const response = await fetch('https://api.notion.com/v1/pages', {
  method: 'POST',
  headers: {
    'Authorization': `Bearer ${apiToken}`,
    'Content-Type': 'application/json',
    'Notion-Version': '2022-06-28',
  },
  body: JSON.stringify(requestBody),
})
.then(response => {
    console.log("header is " + response.headers.get('Content-Type'));
    return response.json();
}) 
.then(data => {
  console.log('Response:', data);
})
.catch(error => {
  console.error('Error:', error);
});
