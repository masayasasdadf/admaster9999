import { NextResponse } from 'next/server'; import data from '@/data/analytics.json'; export async function GET(){return NextResponse.json(data)}
