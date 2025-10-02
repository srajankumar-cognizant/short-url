create table file_links (
  id uuid default gen_random_uuid() primary key,
  short_code text not null unique,
  file_url text not null,
  created_at timestamp default now()
);

create table links (
  id uuid primary key default uuid_generate_v4(),
  original_url text not null,
  short_code text unique not null,
  expires_at timestamptz not null,
  created_at timestamptz default now()
);
