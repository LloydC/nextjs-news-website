const server = process.env.NODE_DEV !== 'production' ? 'http://localhost:3000' : 'https://deployed-site.com'

export default server;
