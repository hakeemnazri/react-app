import React from 'react';
import Counter from './Counter';
import Invisible from './invisible';
import SimpleForm from './SimpleForm';
import ColorChanger from './ColorChanger';
import TodoApp from './TodoApp';
import CharacterCounter from './CharacterCounter'
import ShowPasswordToggle from './ShowPasswordToggle'
import FilterList from './FilterList'
import ThemeToggle from './ThemeToggle'
import RegistrationForm from './RegistrationForm'
import DynamicDropdown from './DynamicDropdown'
import Quiz from './Quiz'

function App(){
    return(
        <div>
            <h1>My App</h1>
            {/*<Counter/>*/}
            {/*<Invisible />*/}
            {/* <SimpleForm /> */}
            {/* <ColorChanger /> */}
            {/* <TodoApp /> */}
            {/* <CharacterCounter /> */}
            {/* <ShowPasswordToggle /> */}
            {/* <FilterList /> */}
            {/* <ThemeToggle/> */}
            {/* <RegistrationForm /> */}
            {/* <DynamicDropdown/> */}
            <Quiz />
        </div>
    )
}

export default App;