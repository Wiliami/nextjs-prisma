export async function GET(req: Request, 
    { params }: { params: Promise<{ team: string }> }
) {
    const { team } = await params
} 
// http://localhost:3000/dashboard/flamengo