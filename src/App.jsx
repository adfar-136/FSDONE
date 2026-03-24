import React from 'react'
import Pomodoro from './Pomodoro/Pomodoro'

function App() {
  return (
    <div>
      <Pomodoro/>
    </div>
  )
}

export default App








// import React from 'react'
// import ContactForm from './reactforms/ContactForm'
// import AboutForm from './reactforms/AboutForm'
// import LikeCounter from './optimistic/LikeCounter'

// function App() {
//   return (
//     <div>
//       {/* <ContactForm/> */}
//        {/* <AboutForm/>
//         */}
//         <LikeCounter/>
//     </div>
//   )
// }

// export default App






















// // import React from 'react'
// // import TabButton from './useTransition/TabButton'
// // import HomeTab from './useTransition/HomeTab'
// // import PostsTab from './useTransition/PostsTab'
// // import ContactsTab from './useTransition/ContactsTab'

// // function App() {
// //   const [activeTab, setActiveTab] = React.useState('home')
// //   const [isPending, startTransition] = React.useTransition()
// //   function handleTabClick(tab) {
// //     startTransition(() => {
// //       setActiveTab(tab)
// //     })
// //   }
// // //ispending logic can be used to show a loading spinner or some placeholder content while the transition is in progress. 
// // // For example, you could conditionally render a loading spinner when isPending is true, and render the actual tab 
// // // content when isPending is false.
// //   return (
// //     <div>
// //       <TabButton label="Home" onClick={() => handleTabClick('home')} disabled={isPending} />
// //       <TabButton label="Posts" onClick={() => handleTabClick('posts')} disabled={isPending} />
// //       <TabButton label="Contacts" onClick={() => handleTabClick('contacts')} disabled={isPending} />
// //       {isPending ? (
// //         <div>Loading...</div>
// //       ) : (
// //         <>
// //           {activeTab === 'home' && <HomeTab />}
// //           {activeTab === 'posts' && <PostsTab />}
// //           {activeTab === 'contacts' && <ContactsTab />}
// //         </>
// //       )}
// //     </div>
// //   )
// // }

// // export default App























// // // import React from 'react'
// // // import Counter from './renderProps/Counter'

// // // function App() {
// // //   return (
// // //     <div>
// // //       <Counter render = {({ count, increment, decrement }) => (
// // //         <div>
// // //           <p>Count: {count}</p>
// // //           <button onClick={increment}>Increment</button>
// // //           <button onClick={decrement}>Decrement</button>
// // //         </div>
// // //       )} />
// // //     </div>
// // //   )
// // // }

// // // export default App









// // // // import React from 'react'
// // // // import WithAuth from './hoc2/WithAuth'
// // // // import Dashbaord from './hoc2/Dashbaord'
// // // // import Settings from './hoc2/Settings';


// // // // const ProtectedDashboard = WithAuth(Dashbaord);
// // // // const ProtectedSettings = WithAuth(Settings);

// // // // function App() {
// // // //   return (
// // // //     <div>
// // // //       <ProtectedDashboard user="Adil" />
// // // //       <ProtectedSettings user="Adil" />
// // // //     </div>
// // // //   )
// // // // }

// // // // export default App














// // // // // import React from 'react'
// // // // // import WithLogger from './hoc/WithLogger'
// // // // // import Hello from './hoc/Hello'
// // // // // const HellowithLogger = WithLogger(Hello)

// // // // // function App() {
// // // // //   return (
// // // // //     <div>
// // // // //       <HellowithLogger name="Adil" />
// // // // //       <HellowithLogger name="rasheed" />
// // // // //     </div>
// // // // //   )
// // // // // }

// // // // // export default App
