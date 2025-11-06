import { useEffect, useRef } from 'react'

export function useTerminalAnimation() {
  const intervalIdRef = useRef<NodeJS.Timeout | null>(null)
  const timeoutIdsRef = useRef<NodeJS.Timeout[]>([])
  const isActiveRef = useRef(true)
  const commandIndexRef = useRef(0)

  useEffect(() => {
    // Wait a bit to ensure DOM is ready
    const initTimeout = setTimeout(() => {
      const terminalContainer = document.querySelector('.terminal-lines')
      if (!terminalContainer) return

      // If interval is already running, don't start a new one
      if (intervalIdRef.current) {
        return // Already running
      }

      const existingLines = terminalContainer.querySelectorAll('.terminal-line')

      const hackerCommands = [
        '$ ssh root@192.168.1.100',
        '> Connection established',
        '> Welcome to Ubuntu 22.04.3 LTS (GNU/Linux 5.15.0-91-generic x86_64)',
        '$ sudo nmap -sV -sC -O 192.168.1.0/24',
        '> Starting Nmap 7.94 ( https://nmap.org )',
        '> Nmap scan report for 192.168.1.1',
        '> Host is up (0.0024s latency)',
        '> PORT     STATE SERVICE    VERSION',
        '> 22/tcp   open  ssh        OpenSSH 8.9p1',
        '> 80/tcp   open  http       nginx 1.18.0',
        '> 443/tcp  open  ssl/http   nginx 1.18.0',
        '$ docker ps -a',
        '> CONTAINER ID   IMAGE              STATUS',
        '> a3f8c2b1e4d9   cybersec/scanner   Up 2 hours',
        '> 7b9e4f6a2c1d   postgres:latest    Up 3 hours',
        '> 5c2d8a7f3b6e   redis:alpine       Up 3 hours',
        '$ git status',
        '> On branch main',
        '> Your branch is up to date with origin/main',
        '> nothing to commit, working tree clean',
        '$ python3 vulnerability_scanner.py --target 192.168.1.50',
        '> [INFO] Initializing security scanner...',
        '> [INFO] Target: 192.168.1.50',
        '> [SCAN] Checking for SQL injection vulnerabilities...',
        '> [SCAN] Testing XSS attack vectors...',
        '> [SCAN] Analyzing SSL/TLS configuration...',
        '> [OK] No critical vulnerabilities detected',
        '$ npm run build',
        '> ✓ Creating an optimized production build',
        '> ✓ Compiled successfully',
      ]

      const maxLines = 35 // Increased to show more lines
      isActiveRef.current = true

      function addTerminalLine() {
        // Always get fresh reference to container
        const terminalContainer = document.querySelector('.terminal-lines')
        if (!terminalContainer || !isActiveRef.current) return

        const line = document.createElement('div')
        line.className = 'terminal-line'
        // Use modulo to ensure infinite loop - this will cycle through commands forever
        line.textContent = hackerCommands[commandIndexRef.current % hackerCommands.length]
        line.style.opacity = '0'
        line.style.transition = 'opacity 0.3s ease-in'

        terminalContainer.appendChild(line)
        
        const fadeInTimeout = setTimeout(() => {
          if (line.parentNode && isActiveRef.current) {
            line.style.opacity = '1'
          }
        }, 10)
        timeoutIdsRef.current.push(fadeInTimeout)

        commandIndexRef.current++

        // Keep cycling through commands infinitely
        // Reset commandIndex if it gets too large to prevent memory issues
        if (commandIndexRef.current >= hackerCommands.length * 1000) {
          commandIndexRef.current = 0
        }

        // Only remove old lines if we significantly exceed maxLines
        // This prevents aggressive removal that causes "half text" issue
        const lines = terminalContainer.querySelectorAll('.terminal-line')
        if (lines.length > maxLines + 5) { // Only remove when 5+ lines over limit
          // Find the oldest fully visible line to remove
          for (let i = 0; i < lines.length; i++) {
            const oldLine = lines[i] as HTMLElement
            if (oldLine && oldLine.parentNode) {
              // Check if line is fully visible before removing
              const computedStyle = window.getComputedStyle(oldLine)
              const opacity = parseFloat(computedStyle.opacity)
              
              // Skip if already marked for removal
              if (oldLine.getAttribute('data-removing') === 'true') {
                continue
              }
              
              // Only remove if opacity is 1 (fully visible) - be very conservative
              if (opacity === 1 || opacity >= 0.95) {
                // Mark as removing to prevent duplicate removal attempts
                oldLine.setAttribute('data-removing', 'true')
                oldLine.style.opacity = '0'
                const removeTimeout = setTimeout(() => {
                  if (oldLine.parentNode && isActiveRef.current) {
                    oldLine.remove()
                  }
                }, 300) // Longer delay to ensure complete fade out
                timeoutIdsRef.current.push(removeTimeout)
                break // Only remove one at a time
              }
            }
          }
        }
      }

      // Initial batch of lines - only if container is empty
      if (existingLines.length === 0) {
        for (let i = 0; i < 12; i++) {
          const initTimeout = setTimeout(() => {
            if (isActiveRef.current) {
              addTerminalLine()
            }
          }, i * 150)
          timeoutIdsRef.current.push(initTimeout)
        }
      }

      // Start infinite interval - this will keep running forever
      intervalIdRef.current = setInterval(() => {
        if (isActiveRef.current) {
          addTerminalLine()
        }
      }, 400)
    }, 100)

    return () => {
      isActiveRef.current = false
      
      // Clear all timeouts
      timeoutIdsRef.current.forEach(timeoutId => {
        clearTimeout(timeoutId)
      })
      timeoutIdsRef.current = []

      // Clear interval
      if (intervalIdRef.current) {
        clearInterval(intervalIdRef.current)
        intervalIdRef.current = null
      }

      // Clear init timeout
      clearTimeout(initTimeout)
    }
  }, [])
}

