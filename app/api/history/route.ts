import { NextResponse } from "next/server";
import fs from "fs/promises";
import path from "path";

const DATA_FILE = path.join(process.cwd(), "data", "chat-history.json");

async function ensureDataDir() {
  const dir = path.dirname(DATA_FILE);
  await fs.mkdir(dir, { recursive: true });
}

async function readHistory() {
  try {
    const data = await fs.readFile(DATA_FILE, "utf-8");
    return JSON.parse(data);
  } catch {
    return [];
  }
}

export async function GET() {
  const messages = await readHistory();
  return NextResponse.json({ messages });
}

export async function POST(req: Request) {
  try {
    const { messages } = await req.json();

    if (!Array.isArray(messages)) {
      return NextResponse.json({ error: "Invalid data" }, { status: 400 });
    }

    await ensureDataDir();
    await fs.writeFile(DATA_FILE, JSON.stringify(messages, null, 2));
    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Failed to save history:", error);
    return NextResponse.json({ error: "Failed to save" }, { status: 500 });
  }
}

export async function DELETE() {
  try {
    await fs.unlink(DATA_FILE).catch(() => {});
    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Failed to clear history:", error);
    return NextResponse.json({ error: "Failed to clear" }, { status: 500 });
  }
}
