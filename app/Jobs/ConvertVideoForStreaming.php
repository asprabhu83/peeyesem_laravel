<?php

namespace App\Jobs;
use FFMpeg;
use App\Models\Video;
use Carbon\Carbon;
use FFMpeg\Coordinate\Dimension;
use FFMpeg\Format\Video\X264;
use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldBeUnique;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Foundation\Bus\Dispatchable;
use Illuminate\Support\Facades\Storage;
use Illuminate\Queue\InteractsWithQueue;
use Illuminate\Queue\SerializesModels;

class ConvertVideoForStreaming implements ShouldQueue
{
    use Dispatchable, InteractsWithQueue, Queueable, SerializesModels;
 
    public $video;
 
    /**
     * Create a new job instance.
     *
     * @param Video $video
     */
    public function __construct(Video $video)
    {
        $this->video = $video;
    }
 
    /**
     * Execute the job.
     *
     * @return void
     */
    public function handle()
    {
        $media = FFMpeg::fromDisk($this->video->disk)
        ->open($this->video->file_name);
        $durationInSeconds = $media->getDurationInSeconds();
        $this->video->video_duration = $durationInSeconds;
        $video = Video::updateOrCreate(
            ['id' => $this->video->id],
            ['video_duration' => $durationInSeconds]
        );
        $diskName = Storage::build([
            'driver' => 'local',
            'root' => public_path('uploads/' . $this->video->image_Location),
        ]);
        for ($secs = 0; $secs <= $durationInSeconds; $secs++) {
            $media = $media ->getFrameFromSeconds($secs)
                ->export()
                ->toDisk($diskName)
                ->save("thumb_{$secs}.jpg");
          }
          
    }



}
