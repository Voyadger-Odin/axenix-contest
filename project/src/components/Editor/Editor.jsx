import React from 'react';
import CodeMirror from '@uiw/react-codemirror';
import { javascript } from '@codemirror/lang-javascript';

function App({onCangeGet}) {

    const [value, setValue] = React.useState("console.log('hello world!');");
    const onChange = React.useCallback((val, viewUpdate) => {
        console.log('val:', val);
        setValue(val);
    }, []);
    return <CodeMirror  value={value} height="200px" extensions={[javascript({ jsx: true })]} onChange={(editor) => {
        onCangeGet(editor)
    }} />;
}
export default App;