export interface Note {
  _id: string;
  id?: string;
  title: string;
  description: string;
  color?: string;
  favorite?: boolean;
  createdAt?: string;
}

export interface NoteCardProps {
  note: Note;
  key: string;
  updateNoteList: (noteId: string) => void;
  updateNewNoteList: (newNote: Note) => void;
}

export interface NoteCardFavProps {
  note: Note;
  updateNoteList: (noteId: string) => void;
  updateNewNoteList: (newNote: Note) => void;
}

export interface NewNoteCardProps {
  updateNewNoteList: (newNote: Note) => void;
  id?: string;
}

export interface NewNoteUpCardProps {
  updateNewNoteList: (newNote: Note) => void;
  id: string;
}

export interface GetNotesResponse {
  notes: Note[];
  loading: boolean;
  setNotes: React.Dispatch<React.SetStateAction<Note[]>>;
}

export interface FormData {
  title: string;
  description: string;
  color?: string;
  favorite?: boolean;
}
