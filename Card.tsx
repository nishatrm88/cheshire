
import React from 'react';
export function Card({ children, className='' }){ return <div className={`rounded-3xl border bg-white/70 ${className}`}>{children}</div> }
export function CardHeader({ children, className='' }){ return <div className={`px-4 pt-4 ${className}`}>{children}</div> }
export function CardTitle({ children, className='' }){ return <h3 className={`text-lg font-semibold ${className}`}>{children}</h3> }
export function CardContent({ children, className='' }){ return <div className={`px-4 pb-2 space-y-3 ${className}`}>{children}</div> }
export function CardFooter({ children, className='' }){ return <div className={`px-4 pb-4 pt-2 flex items-center gap-2 ${className}`}>{children}</div> }
