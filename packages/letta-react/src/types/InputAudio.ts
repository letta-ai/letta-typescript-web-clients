/**
 * Generated by Kubb (https://kubb.dev/).
 * Do not edit manually.
 */

export const inputAudioFormatEnum = {
  wav: 'wav',
  mp3: 'mp3',
} as const

export type InputAudioFormatEnum = (typeof inputAudioFormatEnum)[keyof typeof inputAudioFormatEnum]

export type InputAudio = {
  /**
   * @type string
   */
  data: string
  /**
   * @type string
   */
  format: InputAudioFormatEnum
}