export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export interface Database {
  public: {
    Tables: {
      uploads: {
        Row: {
          id: string
          created_at: string
          user_id: string
          title: string | null
          file_path: string
          file_type: string
          file_size: number
          duration: number | null
          status: string
        }
        Insert: {
          id?: string
          created_at?: string
          user_id: string
          title?: string | null
          file_path: string
          file_type: string
          file_size: number
          duration?: number | null
          status?: string
        }
        Update: {
          id?: string
          created_at?: string
          user_id?: string
          title?: string | null
          file_path?: string
          file_type?: string
          file_size?: number
          duration?: number | null
          status?: string
        }
        Relationships: [
          {
            foreignKeyName: "uploads_user_id_fkey"
            columns: ["user_id"]
            referencedRelation: "users"
            referencedColumns: ["id"]
          }
        ]
      }
      summaries: {
        Row: {
          id: string
          created_at: string
          upload_id: string
          title: string | null
          summary_text: string | null
          key_points: Json | null
          action_items: Json | null
          transcript: string | null
        }
        Insert: {
          id?: string
          created_at?: string
          upload_id: string
          title?: string | null
          summary_text?: string | null
          key_points?: Json | null
          action_items?: Json | null
          transcript?: string | null
        }
        Update: {
          id?: string
          created_at?: string
          upload_id?: string
          title?: string | null
          summary_text?: string | null
          key_points?: Json | null
          action_items?: Json | null
          transcript?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "summaries_upload_id_fkey"
            columns: ["upload_id"]
            referencedRelation: "uploads"
            referencedColumns: ["id"]
          }
        ]
      }
      profiles: {
        Row: {
          id: string
          updated_at: string | null
          username: string | null
          full_name: string | null
          avatar_url: string | null
          plan: string
          uploads_count: number
          uploads_limit: number
        }
        Insert: {
          id: string
          updated_at?: string | null
          username?: string | null
          full_name?: string | null
          avatar_url?: string | null
          plan?: string
          uploads_count?: number
          uploads_limit?: number
        }
        Update: {
          id?: string
          updated_at?: string | null
          username?: string | null
          full_name?: string | null
          avatar_url?: string | null
          plan?: string
          uploads_count?: number
          uploads_limit?: number
        }
        Relationships: [
          {
            foreignKeyName: "profiles_id_fkey"
            columns: ["id"]
            referencedRelation: "users"
            referencedColumns: ["id"]
          }
        ]
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}