import { Header } from './components/Header';
import { Sidebar } from './components/Sidebar';
import { Post } from './components/Post';

import styles from './App.module.css';

import './global.css';

function App() {

  const posts = [
    {
        id: 1,
        author: {
            avatarUrl: "https://github.com/Gabrielmtvp.png",
            name: "Gabriel Gomes",
            role: "CTO @ GabrielDev"
        },
        content: [
            {type: "paragraph", content: "News about ReactJS"},
            {type: "paragraph", content: "What we can see coming next!"},
            {type: "link", content: "React JS"},
        ],
        publishedAt: new Date('2023-05-03 20:00:00')
    },
    {
        id: 2,
        author: {
            avatarUrl: "https://media.licdn.com/dms/image/C4E03AQHV-P38vj4xKA/profile-displayphoto-shrink_400_400/0/1648069255040?e=1689206400&v=beta&t=NfuzSrQWynf5IRuBJpav0SafBjb5FieVWz0eMAeYctI",
            name: "Alicia",
            role: "CTO @ GabrielDev"
        },
        content: [
            {type: "paragraph", content: "What's up"},
            {type: "paragraph", content: "Are you reading this?"},
            {type: "link", content: "Canva"},
        ],
        publishedAt: new Date('2023-05-10 20:00:00')
    }
];

  return (
    <div>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          {
            posts.map(post => {
              return(
                <Post 
                  key={post.id}
                  author={post.author}
                  content={post.content}
                  publishedAt={post.publishedAt}
                />
              )
            })
          }
        </main>
      </div>
    </div>
  )
}

export default App
