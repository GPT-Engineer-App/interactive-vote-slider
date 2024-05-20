# interactive-vote-slider

The "Faving" web application enables users to vote on community-funded projects through an interactive slider. Each project is presented on a card with a title, description, and slider for voting. Votes are updated dynamically, reflecting changes in real-time. The backend supports this by managing API calls for fetching project details and updating vote scores, ensuring a responsive and accessible user experience across devices.

Components and Functions
1. UserProfile Component
Purpose: Manages user profile information, including name and preferences.
Functions:
Fetch Data: Retrieves user data from Supabase.
Update Data: Allows users to update their profile information and saves it to Supabase.
2. ProjectCard Component
Purpose: Displays individual community-funded projects with relevant details.
Functions:
Display Data: Shows project title, description, and current vote score.
Interactive Slider: Includes a slider for users to cast their votes.
3. VotingSlider Component
Purpose: Enables users to cast votes on projects via a slider.
Functions:
Track Vote: Manages the current vote value.
Submit Vote: Sends the updated vote to Supabase in real-time, updating the project's score.
4. ConsentForm Component
Purpose: Obtains and manages user consent for data collection and processing.
Functions:
Track Consent: Manages user consent status.
Submit Consent: Updates consent information in Supabase.
Backend Integration
Supabase: Acts as the backend, handling data storage, real-time updates, and API endpoints for user profiles, projects, votes, and consent statuses.
Summary
The "Faving" web application integrates several components to provide a dynamic and engaging user experience. The UserProfile component allows users to manage their information, while the ProjectCard and VotingSlider components facilitate interactive voting on projects. The ConsentForm component ensures compliance with data privacy regulations. Supabase supports these components by managing real-time data and providing a robust backend infrastructure. This setup ensures a seamless and responsive interaction for users across different devices and platforms.

## Collaborate with GPT Engineer

This is a [gptengineer.app](https://gptengineer.app)-synced repository 🌟🤖

Changes made via gptengineer.app will be committed to this repo.

If you clone this repo and push changes, you will have them reflected in the GPT Engineer UI.

## Tech stack

This project is built with React and Chakra UI.

- Vite
- React
- Chakra UI

## Setup

```sh
git clone https://github.com/GPT-Engineer-App/interactive-vote-slider.git
cd interactive-vote-slider
npm i
```

```sh
npm run dev
```

This will run a dev server with auto reloading and an instant preview.

## Requirements

- Node.js & npm - [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating)
