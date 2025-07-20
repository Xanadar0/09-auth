export type NoteTag = "Todo" | "Work" | "Personal" | "Meeting" | "Shopping";

export type FetchNotesResponse = {
  notes: Note[];
  total: number;
  totalPages: number;
  tag: string;
};

export type NewNoteData = {
  title: string;
  content: string;
  tag: NoteTag;
};


export type Category = {
  id: string;
  name: string;
};

export interface SessionResponseData {
  valid: boolean;
}


export interface Note {
  id: string;
  title: string;
  content: string;
  createdAt: string;
  updatedAt: string;
  tag: string;
}

export interface NewNote {
  title: string;
  content: string;
  tag: string;
}

export interface NotesResponse {
  notes: Note[];
  page: number;
  totalPages: number;
  tag: string;
}