const CodeDecorations = () => {
  const codeElements = [
    { code: '<div>', color: 'text-blue-400', top: '10%', left: '15%' },
    { code: '</div>', color: 'text-blue-400', top: '85%', left: '20%' },
    { code: '<section>', color: 'text-purple-400', top: '25%', right: '10%' },
    { code: '</section>', color: 'text-purple-400', top: '70%', right: '15%' },
    { code: 'const', color: 'text-pink-400', top: '40%', left: '8%' },
    { code: 'function', color: 'text-yellow-400', top: '55%', right: '12%' },
    { code: '=>', color: 'text-cyan-400', top: '30%', left: '25%' },
    { code: '{ }', color: 'text-green-400', top: '65%', left: '18%' },
    { code: 'import', color: 'text-pink-400', top: '15%', right: '25%' },
    { code: 'export', color: 'text-pink-400', top: '80%', right: '20%' },
    { code: '<Component />', color: 'text-blue-400', top: '45%', right: '8%' },
    { code: 'className=', color: 'text-yellow-400', top: '60%', left: '12%' },
    { code: 'useState()', color: 'text-purple-400', top: '20%', left: '30%' },
    { code: 'return (', color: 'text-pink-400', top: '75%', left: '10%' },
    { code: '//', color: 'text-gray-500', top: '35%', right: '18%' },
  ]

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      {codeElements.map((element, i) => (
        <div
          key={i}
          className={`absolute ${element.color} font-mono text-sm opacity-10 animate-float-slow`}
          style={{
            top: element.top,
            left: element.left,
            right: element.right,
            animationDelay: `${i * 0.5}s`,
            animationDuration: `${20 + i * 2}s`,
          }}
        >
          {element.code}
        </div>
      ))}

      {/* Code blocks */}
      <div className="absolute top-1/4 left-10 text-xs font-mono opacity-5 space-y-1">
        <div className="text-gray-500">{'// Portfolio Component'}</div>
        <div className="text-pink-400">{'const'} <span className="text-yellow-400">Portfolio</span> = () {'=> {'}</div>
        <div className="pl-4 text-purple-400">{'return ('}</div>
        <div className="pl-8 text-blue-400">{'<div className="portfolio">'}</div>
        <div className="pl-12 text-gray-400">{'...'}</div>
        <div className="pl-8 text-blue-400">{'</div>'}</div>
        <div className="pl-4 text-purple-400">{')'}</div>
        <div className="text-pink-400">{'}'}</div>
      </div>

      <div className="absolute bottom-1/4 right-10 text-xs font-mono opacity-5 space-y-1">
        <div className="text-pink-400">{'import'} <span className="text-yellow-400">React</span> <span className="text-pink-400">from</span> <span className="text-green-400">'react'</span></div>
        <div className="text-pink-400">{'import'} {'{'} <span className="text-cyan-400">useState</span> {'}'} <span className="text-pink-400">from</span> <span className="text-green-400">'react'</span></div>
        <div className="mt-2 text-gray-500">{'// Components'}</div>
        <div className="text-pink-400">{'export default'} <span className="text-yellow-400">Portfolio</span></div>
      </div>

      {/* Bracket pairs */}
      <div className="absolute top-1/3 left-1/4 text-2xl font-mono opacity-5 text-cyan-400">{'{ }'}</div>
      <div className="absolute bottom-1/3 right-1/4 text-2xl font-mono opacity-5 text-green-400">{'[ ]'}</div>
      <div className="absolute top-2/3 left-1/3 text-2xl font-mono opacity-5 text-yellow-400">{'( )'}</div>
    </div>
  )
}

export default CodeDecorations
