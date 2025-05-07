import React, { useCallback } from 'react';

import 'react-flow-renderer/dist/style.css';
import 'react-flow-renderer/dist/theme-default.css'; // Optional theme
import ReactFlow, {
    addEdge,
    useNodesState,
    useEdgesState,
    MiniMap,
    Controls,
    Background,
  } from 'react-flow-renderer';

import { nanoid } from 'nanoid';

const nodeTypes = [
  { type: 'cold_email', label: 'Cold Email' },
  { type: 'wait_delay', label: 'Wait/Delay' },
  { type: 'lead_source', label: 'Lead Source' }
];

const initialNodes = [
  { id: '1', type: 'input', data: { label: 'Start' }, position: { x: 250, y: 0 } },
];

const initialEdges = [];

const FlowEditor = () => {
  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);

  const addNode = (type) => {
    const newNode = {
      id: nanoid(),
      type: 'default',
      position: { x: Math.random() * 400, y: Math.random() * 400 },
      data: { label: nodeTypes.find(n => n.type === type).label, type },
    };
    setNodes((nds) => [...nds, newNode]);
  };

  const onConnect = useCallback(
    (params) => setEdges((eds) => addEdge({ ...params, animated: true }, eds)),
    [setEdges]
  );

  return (
    <div style={{ display: 'flex' }}>
      <div style={{ width: '200px', padding: '10px', borderRight: '1px solid #ccc' }}>
        <h4>Add Nodes</h4>
        {nodeTypes.map((node) => (
          <button key={node.type} onClick={() => addNode(node.type)} style={{ marginBottom: '10px', width: '100%' }}>
            {node.label}
          </button>
        ))}
      </div>
      <div style={{ width: '100%', height: '100vh' }}>
        <ReactFlow
          nodes={nodes}
          edges={edges}
          onNodesChange={onNodesChange}
          onEdgesChange={onEdgesChange}
          onConnect={onConnect}
          fitView
        >
          <MiniMap />
          <Controls />
          <Background color="#aaa" gap={16} />
        </ReactFlow>
      </div>
    </div>
  );
};

export default FlowEditor;