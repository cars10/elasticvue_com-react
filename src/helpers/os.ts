export enum Os {
  Linux = 'linux',
  Windows = 'windows',
  Mac = 'mac'
}

export const userAgentOs = (userAgent: string | null) => {
  if (!userAgent) return
  if (userAgent.includes('Linux')) return Os.Linux
  if (userAgent.includes('Windows')) return Os.Windows
  if (userAgent.includes('Mac')) return Os.Mac
}

export const sortedOs = (priorityOs: Os | undefined) => {
  return arrayPriority<Os>(priorityOs, Object.values(Os))
}

export const arrayPriority = <T>(priority: T | undefined, values: T[]) => {
  if (!priority) return values

  if (values.includes(priority)) {
    const index = values.indexOf(priority)
    if (index) values.splice(index, 1)
    return [priority].concat(values)
  } else {
    return values
  }
}
