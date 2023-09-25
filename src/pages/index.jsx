
export const Landing = () => <h2>Landing Page (Public)</h2>

// eslint-disable-next-line react/prop-types
export const Home = () => {   
    return <h2>Home Page (Private)</h2>
}

export const Dashbord = () => <h2>Dashbord (Private)</h2>

// eslint-disable-next-line react/no-unescaped-entities
export const Analytics = () => <h2>Analytics (Private, permission: 'analize')</h2>

// eslint-disable-next-line react/no-unescaped-entities
export const Admin = () => <h2>Admin (Private, permission: 'admin')</h2>