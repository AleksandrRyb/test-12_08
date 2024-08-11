/** @type {import('next').NextConfig} */
const nextConfig = {
    redirects() {
        return [
            {
                source: "/",
                destination: "/auth/sign-in",
                permanent: true
            }
        ]
    }
};

export default nextConfig;
