/*
  # Create Initial Schema for Lovable AI

  1. New Tables
    - `uploads` - Stores uploaded audio/video files metadata
    - `summaries` - Stores AI-generated transcriptions and summaries
    - `profiles` - Stores user profile information and plan details

  2. Security
    - Enable RLS on all tables
    - Add policies to allow authenticated users to CRUD their own data
*/

-- Create uploads table
CREATE TABLE IF NOT EXISTS uploads (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  created_at timestamptz DEFAULT now(),
  user_id uuid REFERENCES auth.users(id) NOT NULL,
  title text,
  file_path text NOT NULL,
  file_type text NOT NULL,
  file_size bigint NOT NULL,
  duration integer,
  status text DEFAULT 'pending'
);

-- Create summaries table
CREATE TABLE IF NOT EXISTS summaries (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  created_at timestamptz DEFAULT now(),
  upload_id uuid REFERENCES uploads(id) NOT NULL,
  title text,
  summary_text text,
  key_points jsonb,
  action_items jsonb,
  transcript text
);

-- Create profiles table
CREATE TABLE IF NOT EXISTS profiles (
  id uuid PRIMARY KEY REFERENCES auth.users(id),
  updated_at timestamptz,
  username text UNIQUE,
  full_name text,
  avatar_url text,
  plan text DEFAULT 'free',
  uploads_count integer DEFAULT 0,
  uploads_limit integer DEFAULT 5
);

-- Enable Row Level Security
ALTER TABLE uploads ENABLE ROW LEVEL SECURITY;
ALTER TABLE summaries ENABLE ROW LEVEL SECURITY;
ALTER TABLE profiles ENABLE ROW LEVEL SECURITY;

-- Uploads policies
CREATE POLICY "Users can insert their own uploads"
  ON uploads
  FOR INSERT
  TO authenticated
  WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can view their own uploads"
  ON uploads
  FOR SELECT
  TO authenticated
  USING (auth.uid() = user_id);

CREATE POLICY "Users can update their own uploads"
  ON uploads
  FOR UPDATE
  TO authenticated
  USING (auth.uid() = user_id);

CREATE POLICY "Users can delete their own uploads"
  ON uploads
  FOR DELETE
  TO authenticated
  USING (auth.uid() = user_id);

-- Summaries policies
CREATE POLICY "Users can view summaries of their uploads"
  ON summaries
  FOR SELECT
  TO authenticated
  USING (EXISTS (
    SELECT 1 FROM uploads
    WHERE uploads.id = summaries.upload_id
    AND uploads.user_id = auth.uid()
  ));

CREATE POLICY "Users can update summaries of their uploads"
  ON summaries
  FOR UPDATE
  TO authenticated
  USING (EXISTS (
    SELECT 1 FROM uploads
    WHERE uploads.id = summaries.upload_id
    AND uploads.user_id = auth.uid()
  ));

CREATE POLICY "Users can delete summaries of their uploads"
  ON summaries
  FOR DELETE
  TO authenticated
  USING (EXISTS (
    SELECT 1 FROM uploads
    WHERE uploads.id = summaries.upload_id
    AND uploads.user_id = auth.uid()
  ));

-- Profiles policies
CREATE POLICY "Users can view their own profile"
  ON profiles
  FOR SELECT
  TO authenticated
  USING (auth.uid() = id);

CREATE POLICY "Users can update their own profile"
  ON profiles
  FOR UPDATE
  TO authenticated
  USING (auth.uid() = id);

-- Function to create a profile after signup
CREATE OR REPLACE FUNCTION create_profile_on_signup()
RETURNS TRIGGER AS $$
BEGIN
  INSERT INTO public.profiles (id, updated_at)
  VALUES (new.id, now());
  RETURN new;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

-- Trigger to create a profile after signup
CREATE TRIGGER create_profile_on_signup
AFTER INSERT ON auth.users
FOR EACH ROW EXECUTE FUNCTION create_profile_on_signup();