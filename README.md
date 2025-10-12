# Short URL

A simple URL shortener application built with Next.js and Supabase. This app allows users to shorten URLs with expiration times and provides a clean, responsive interface for managing and using shortened links.

## Tech Stack

### Frontend

- **Framework**: [Next.js](https://nextjs.org/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Icons**: [Lucide React](https://lucide.dev/)

### Backend

- **Database**: [Supabase](https://supabase.com/) (PostgreSQL)
- **API**: Supabase client for interacting with the database

## Features

- Shorten URLs with customizable expiration durations.
- Copy shortened URLs to the clipboard.
- Redirect to the original URL using the shortened link.
- Automatically invalidates expired links.
- Dark mode and light mode support (auto-detects system preferences).

## How to Use

### Prerequisites

- Node.js installed on your system.
- A Supabase account with a project set up.

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/srajankumar-cognizant/short-url.git
   cd short-url
   ```
2. Install the dependencies:
   ```bash
   npm install
   ```
3. Set up your Supabase project:
   - Create a new project on the [Supabase website](https://supabase.com/).
   - Configure the database and API settings as needed.
4. Add your Supabase credentials to the environment variables:
   - Create a `.env.local` file in the root of the project.
   - Add the following lines, replacing with your actual Supabase URL and anon key:
     ```plaintext
     NEXT_PUBLIC_SUPABASE_URL=https://your-supabase-url.supabase.co
     NEXT_PUBLIC_SUPABASE_ANON_KEY=your-anon-key
     ```
5. Run the development server:
   ```bash
   npm run dev
   ```
6. Open your browser and go to `http://localhost:3000` to see the app in action.

### Usage

- To shorten a URL, paste it into the input field and click the "Shorten" button.
- To manage your shortened URLs, visit the "My Links" section in the app.
- To use a shortened URL, simply click on the link or copy it to your clipboard.
