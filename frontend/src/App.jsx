import React, { useRef } from 'react';
// import FlowEditor from './components/FlowEditor';
import AddLeadSourceButton from './components/AddLeadSourceButton';
import AddColdEmailButton from './components/AddColdEmailButton';
import AddWaitDelayButton from './components/AddWaitDelayButton';
import FlowEditor from './components/flowEditor';

const App = () => {
  const editorRef = useRef();

  return (
    <div>
      <div style={{ display: 'flex', gap: '10px', padding: '10px' }}>
        <AddLeadSourceButton onClick={() => editorRef.current?.addLeadSource()} />
        <AddColdEmailButton onClick={() => editorRef.current?.addColdEmail()} />
        <AddWaitDelayButton onClick={() => editorRef.current?.addWaitDelay()} />
      </div>
      <FlowEditor ref={editorRef} />
    </div>
  );
};

export default App;
