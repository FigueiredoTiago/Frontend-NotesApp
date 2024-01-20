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
  key: string; // Adicionando a propriedade 'key' na interface
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
