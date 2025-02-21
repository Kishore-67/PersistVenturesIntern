import { Box } from '@chakra-ui/react';
import Editor from '@monaco-editor/react';

const CodeEditor = ({ value, onChange, language = 'python' }) => {
  return (
    <Box borderWidth="1px" borderRadius="lg" overflow="hidden" h="400px">
      <Editor
        height="100%"
        defaultLanguage={language}
        defaultValue={value}
        onChange={onChange}
        theme="vs-dark"
        options={{
          minimap: { enabled: false },
          fontSize: 14,
          lineNumbers: 'on',
          automaticLayout: true,
          scrollBeyondLastLine: false,
        }}
      />
    </Box>
  );
};

export default CodeEditor;
