## Frontend Engineer Assessment.

Check out the details of the assessment at home page of the project.

To get started with this project, you'll need to install its dependencies. Run the following command:

```bash
npm install
```

## Usage

To run the development server, execute the following command:

```bash
npm run dev
```

To build the application for production, use the following command:

```bash
npm run build
```

## Docker

To containerize your application using Docker, follow these steps:

1. Build the Docker image. You can name the image whatever you like. Here's an example:

```bash
docker build -t "your-app-name" .
```

2. Run a Docker container based on the image you just built. Make sure to map the container's port 3000 to a port on your host machine. Replace "your-app-name" with the image name you provided in the previous step:

```bash
docker run -p 3000:3000 "your-app-name"
```

Visit http://localhost:3000 in your browser to view the application.
