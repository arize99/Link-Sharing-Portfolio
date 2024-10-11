# Link Sharing Portfolio

## Description
Link Sharing Portfolio is a React-based web application that allows users to create a simple portfolio page with links to their GitHub, LinkedIn, and Twitter profiles. It also includes functionality to upload and display a profile photo using Pinata's IPFS storage.

## Features
- Input fields for GitHub, LinkedIn, and Twitter profile links
- Profile photo upload functionality
- Integration with Pinata's IPFS storage for photo hosting
- Responsive design using Tailwind CSS

## Prerequisites
Before you begin, ensure you have met the following requirements:
* You have installed the latest version of [Node.js and npm](https://nodejs.org/)
* You have a Pinata account and API keys (for photo upload functionality)

## Installing Link Sharing Portfolio
To install Link Sharing Portfolio, follow these steps:

1. Clone the repository:
   ```
   git clone https://github.com/yourusername/link-sharing-portfolio.git
   ```
2. Navigate to the project directory:
   ```
   cd link-sharing-portfolio
   ```
3. Install the dependencies:
   ```
   npm install
   ```

## Configuring the Application
1. Create a `.env` file in the root directory of the project.
2. Add your Pinata API keys to the `.env` file:
   ```
   REACT_APP_PINATA_API_KEY=your_pinata_api_key
   REACT_APP_PINATA_SECRET_API_KEY=your_pinata_secret_api_key
   ```

## Using Link Sharing Portfolio
To use Link Sharing Portfolio, follow these steps:

1. Start the development server:
   ```
   npm start
   ```
2. Open your web browser and navigate to `http://localhost:3000`
3. Enter your GitHub, LinkedIn, and Twitter profile URLs in the respective input fields.
4. Click on "Upload Photo" to select and upload a profile picture.
5. Click "Save to Pinata" to upload the photo to IPFS via Pinata.

## Contributing to Link Sharing Portfolio
To contribute to Link Sharing Portfolio, follow these steps:

1. Fork this repository.
2. Create a branch: `git checkout -b <branch_name>`.
3. Make your changes and commit them: `git commit -m '<commit_message>'`
4. Push to the original branch: `git push origin <project_name>/<location>`
5. Create the pull request.

Alternatively, see the GitHub documentation on [creating a pull request](https://help.github.com/articles/creating-a-pull-request/).

## Contact
If you want to contact me, you can `Create an issue`.

## License
This project uses the following license: [MIT License](https://opensource.org/licenses/MIT).
