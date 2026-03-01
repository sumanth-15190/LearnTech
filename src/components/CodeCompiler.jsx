import { useState, useEffect } from 'react';
import '../styles/HtmlCompiler.css';

function CodeCompiler({ language = 'html' }) {
    const [code, setCode] = useState('');
    const [output, setOutput] = useState('');
    const [consoleOutput, setConsoleOutput] = useState([]);

    useEffect(() => {
        // Set initial boilerplate based on language
        if (language === 'html') {
            setCode(`<!DOCTYPE html>
<html>
<head>
  <title>My Page</title>
</head>
<body>
  <h1>Hello World!</h1>
  <p>Start coding...</p>
</body>
</html>`);
        } else if (language === 'css') {
            setCode(`<!DOCTYPE html>
<html>
<head>
<style>
  body {
    background-color: #f0f0f0;
    font-family: Arial, sans-serif;
  }
  h1 {
    color: #3498db;
    text-align: center;
  }
  p {
    font-size: 18px;
    color: #2c3e50;
  }
</style>
</head>
<body>
  <h1>Hello CSS</h1>
  <p>Modify the style above to see changes!</p>
</body>
</html>`);
        } else if (language === 'java') {
            setCode(`public class Main {
    public static void main(String[] args) {
        System.out.println("Hello from Java!");
    }
}`);
        } else if (language === 'python') {
            setCode(`print("Hello from Python!")`);
        }

        setOutput('');
        setConsoleOutput([]);
    }, [language]);

    const runCode = async () => {
        if (language === 'html' || language === 'css') {
            setOutput(code);
        } else {
            setConsoleOutput(["Running code..."]);
            try {
                let execLanguage = language;
                let version = "*";
                if (language === 'java') {
                    // Piston uses 'java'
                    version = "15.0.2";
                } else if (language === 'python') {
                    version = "3.10.0";
                }

                const response = await fetch("/api/compile", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify({
                        language: execLanguage,
                        code: code
                    })
                });

                if (!response.ok) {
                    throw new Error("Failed to execute code");
                }

                const data = await response.json();

                let outputLines = [];
                if (data.output) {
                    outputLines = data.output.split('\\n');
                } else if (data.error) {
                    outputLines = data.error.split('\\n');
                }

                // Add success message
                setConsoleOutput([...outputLines, "", "=== Code Execution Finished ==="]);
            } catch (error) {
                setConsoleOutput(["Error: " + error.message]);
            }
        }
    };

    const clearCode = () => {
        setOutput('');
        setConsoleOutput([]);
    };

    const getTitle = () => {
        if (language === 'html') return '💻 Interactive HTML Editor';
        if (language === 'css') return '🎨 CSS Compiler';
        if (language === 'java') return '☕ Java Compiler';
        if (language === 'python') return '🐍 Python Compiler';
        return 'Code Editor';
    };

    return (
        <div className="html-compiler">
            <div className="compiler-header">
                <h3>{getTitle()}</h3>
                <div className="compiler-actions">
                    <button onClick={runCode} className="btn-run">
                        Run
                    </button>
                    <button onClick={clearCode} className="btn-clear">
                        Clear
                    </button>
                </div>
            </div>

            <div className="compiler-body">
                <div className="editor-section">
                    <div className="section-label">{language === 'html' ? 'HTML Code' : (language === 'java' ? 'Main.java' : 'main.py')}</div>
                    <textarea
                        value={code}
                        onChange={(e) => setCode(e.target.value)}
                        className="code-editor"
                        spellCheck="false"
                        placeholder={`Write your ${language} code here...`}
                        style={{ fontFamily: 'monospace' }}
                    />
                </div>

                <div className="preview-section">
                    <div className="section-label">
                        {language === 'html' ? 'Preview' : 'Output'}
                    </div>
                    {language === 'html' || language === 'css' ? (
                        <iframe
                            className="preview-frame"
                            title={language === 'html' ? "HTML Preview" : "CSS Preview"}
                            srcDoc={output}
                            sandbox="allow-scripts"
                        />
                    ) : (
                        <div className="console-output" style={{
                            width: '100%',
                            height: '100%',
                            backgroundColor: '#ffffff',
                            color: '#333333',
                            fontFamily: 'monospace',
                            padding: '15px',
                            boxSizing: 'border-box',
                            overflowY: 'auto',
                            borderLeft: '1px solid #ddd'
                        }}>
                            {consoleOutput.map((line, i) => (
                                <div key={i} style={{
                                    minHeight: '20px',
                                    color: line === "=== Code Execution Successful ===" ? '#04aa6d' : '#333'
                                }}>{line}</div>
                            ))}
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}

export default CodeCompiler;
