// Original file: proto/user.proto

import type { Timestamp as _google_protobuf_Timestamp, Timestamp__Output as _google_protobuf_Timestamp__Output } from '../google/protobuf/Timestamp';

export interface User {
  'uuid'?: (string);
  'first_name'?: (string);
  'last_name'?: (string);
  'email'?: (string);
  'password'?: (string);
  'role'?: (string);
  'organization_id'?: (number);
  'created_at'?: (_google_protobuf_Timestamp | null);
  'updated_at'?: (_google_protobuf_Timestamp | null);
  'is_active'?: (boolean);
  '_password'?: "password";
  '_organization_id'?: "organization_id";
  '_is_active'?: "is_active";
}

export interface User__Output {
  'uuid': (string);
  'first_name': (string);
  'last_name': (string);
  'email': (string);
  'password'?: (string);
  'role': (string);
  'organization_id'?: (number);
  'created_at': (_google_protobuf_Timestamp__Output | null);
  'updated_at': (_google_protobuf_Timestamp__Output | null);
  'is_active'?: (boolean);
  '_password': "password";
  '_organization_id': "organization_id";
  '_is_active': "is_active";
}
