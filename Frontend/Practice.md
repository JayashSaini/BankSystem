<!-- HTML form -->
<form id="updateForm">
  <textarea id="fileContent" rows="10" cols="50"></textarea>
  <button type="submit">Update File</button>
</form>

<script>
document.getElementById('updateForm').addEventListener('submit', async (event) => {
  event.preventDefault();

  const fileContent = document.getElementById('fileContent').value;

  try {
    const response = await fetch('/api/updateFile', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ content: fileContent })
    });

    if (response.ok) {
      // File updated successfully
      console.log('File updated successfully');
    } else {
      console.error('Failed to update file');
    }
  } catch (error) {
    console.error('Error updating file:', error);
  }
});
</script>

const express = require('express');
const fs = require('fs').promises;
const app = express();
const port = 3000;

app.use(express.json());

app.post('/api/updateFile', async (req, res) => {
  const { content } = req.body;

  try {
    // Replace 'filePath' with the path to your file
    await fs.writeFile('filePath', content);
    res.status(200).send('File updated successfully');
  } catch (error) {
    console.error('Error updating file:', error);
    res.status(500).send('Error updating file');
  }
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
