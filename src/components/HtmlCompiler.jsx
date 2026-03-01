import { useState } from 'react';
import '../styles/HtmlCompiler.css';

function HtmlCompiler() {
    const [htmlCode, setHtmlCode] = useState(`<!DOCTYPE html>
<html>
<head>
  <title>My First Page</title>
</head>
<body>
  <h1>Hello World!</h1>
  <p>Start coding here...</p>
</body>
</html>`);

    const [output, setOutput] = useState('');

    const runCode = () => {
        setOutput(htmlCode);
    };

    const clearCode = () => {
        setOutput('');
    };

    return (
        <div className="html-compiler">
            <div className="compiler-header">
                <h3>💻 Interactive HTML Editor</h3>
                <div className="compiler-actions">
                    <button onClick={runCode} className="btn-run">
                        ▶ Run
                    </button>
                    <button onClick={clearCode} className="btn-clear">
                        🗑️ Clear
                    </button>
                </div>
            </div>

            <div className="compiler-body">
                <div className="editor-section">
                    <div className="section-label">HTML Code</div>
                    <textarea
                        value={htmlCode}
                        onChange={(e) => setHtmlCode(e.target.value)}
                        className="code-editor"
                        spellCheck="false"
                        placeholder="Write your HTML code here..."
                    />
                </div>

                <div className="preview-section">
                    <div className="section-label">Preview</div>
                    <iframe
                        className="preview-frame"
                        title="HTML Preview"
                        srcDoc={output}
                        sandbox="allow-scripts"
                    />
                </div>
            </div>
        </div>
    );
}

export default HtmlCompiler;
